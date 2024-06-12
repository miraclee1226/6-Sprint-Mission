export interface ProductItem {
  createdAt: string;
  favoriteCount: number;
  ownerId: number;
  images: string;
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

export interface Product {
  list: ProductItem[];
  totalCount?: number;
}

export interface CommentsProps {
  content: string;
  createdAt: string;
  writer: {
    image: string;
    nickname: string;
  };
}

export interface PageOptions {
  page: number;
  pageSize: number;
  orderBy: string;
}
