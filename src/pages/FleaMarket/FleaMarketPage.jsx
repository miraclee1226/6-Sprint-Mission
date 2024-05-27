import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { styled } from "styled-components";
import BestProducts from "./BestProducts";
import AllProducts from "./AllProducts";
import { PAGESIZE } from "../../utils/constant";
import { getBestProducts, getItems } from "../../api/api";
import Pagination from "./Pagination";
import useAsync from "../../hooks/useAsync";
import usePagination from "../../hooks/usePagination";

function FleaMarketPage() {
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState("recent");
  const [allProductsError, getAllProductsAsync] = useAsync(getItems);
  const [bestProductsError, getBestProductsAsync] = useAsync(getBestProducts);
  const [bestProducts, setBestProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  // Pagination Custom Hook
  const {
    page,
    setPage,
    totalPage,
    pageNumbers,
    handleNextPage,
    handlePrevPage,
    handleClickPageNum,
  } = usePagination(1, totalCount, PAGESIZE, async () => {
    const result = await getAllProductsAsync({ page, pageSize: PAGESIZE, orderBy });
    return result;
  });

  // 베스트 상품
  const handleLoadBestProducts = useCallback(async () => {
    const result = await getBestProductsAsync();
    if (!result) return;

    const { list } = result;
    const sliceList = list.slice(0, 4);
    setBestProducts(sliceList);
  }, [getBestProducts]);

  // 전체 상품
  const handleLoadAllProducts = useCallback(async (options) => {
    const result = await getAllProductsAsync(options);
    if (!result) return;

    const { list, totalCount } = result;
    setTotalCount(totalCount);

    if (options.page === 1) {
      setProducts(list);
    } else {
      setProducts([...list]);
    }
  }, [getItems]);

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
            setPage={setPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            handleClickPageNum={handleClickPageNum}
            totalPage={totalCount}
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
