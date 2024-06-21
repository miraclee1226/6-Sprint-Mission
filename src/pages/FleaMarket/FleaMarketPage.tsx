import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { styled } from "styled-components";
import BestProducts from "./BestProducts";
import AllProducts from "./AllProducts";
import { PAGESIZE } from "../../utils/constant";
import { getBestProducts, getItems } from "../../api/api";
import Pagination from "./Pagination";
import useAsync from "../../hooks/useAsync";
import usePagination from "../../hooks/usePagination";
import { Product, PageOptions } from "../../types";

function FleaMarketPage() {
  const [products, setProducts] = useState<Product["list"]>([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [allProductsError, getAllProductsAsync] = useAsync<Product>(getItems);
  const [bestProductsError, getBestProductsAsync] = useAsync<Product>(getBestProducts);
  const [bestProducts, setBestProducts] = useState<Product["list"]>([]);
  const [totalCount, setTotalCount] = useState(0);

  // Pagination Custom Hook
  const {
    page,
    pageNumbers,
    handleNextPage,
    handlePrevPage,
    handleClickPageNum,
  } = usePagination<Product>(1, totalCount, PAGESIZE, async function (): Promise<Product> {
    const result = await getAllProductsAsync({
      page,
      pageSize: PAGESIZE,
      orderBy,
    });
    return result;
  });

  // 베스트 상품
  const handleLoadBestProducts = useCallback(
    async function () {
      const result = await getBestProductsAsync();
      if (!result) return;

      const { list } = result;
      const sliceList = list.slice(0, 4);
      setBestProducts(sliceList);
    },
    [getBestProducts]
  );

  // 전체 상품
  const handleLoadAllProducts = useCallback(
    async (options: PageOptions) => {
      const result = await getAllProductsAsync(options);
      if (!result) return;

      const { list, totalCount } = result;
      if (totalCount !== undefined) {
        setTotalCount(totalCount);
      }

      if (options.page === 1) {
        setProducts(list);
      } else {
        setProducts([...list]);
      }
    },
    [getItems]
  );

  useEffect(() => {
    handleLoadAllProducts({ page, pageSize: PAGESIZE, orderBy });
    handleLoadBestProducts();
  }, [page, orderBy, handleLoadBestProducts, handleLoadAllProducts]);

  return (
    <>
      <Helmet>
        <title>중고마켓</title>
      </Helmet>
      {bestProductsError?.message || allProductsError?.message ? (
        <ErrorContainer>
          {bestProductsError?.message || allProductsError?.message}
        </ErrorContainer>
      ) : (
        <FleaMarketContainer>
          <BestProducts bestProducts={bestProducts} />
          <AllProducts products={products} setOrderBy={setOrderBy} />
          <Pagination
            page={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            handleClickPageNum={handleClickPageNum}
            pageNumbers={pageNumbers}
          />
        </FleaMarketContainer>
      )}
    </>
  );
}

const FleaMarketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
`;

const ErrorContainer = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 250px;
`;

export default FleaMarketPage;
