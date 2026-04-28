// Define TypeScript interfaces for EVERY entity in the FORGE spec
export interface User {
  id: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface Content {
  id: string;
  userId: string;
  title: string;
  body: string;
  type: string;
  createdAt: string;
}

export interface Collaborator {
  id: string;
  contentId: string;
  userId: string;
  role: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  contentId: string;
  userId: string;
  body: string;
  createdAt: string;
}

export interface Task {
  id: string;
  contentId: string;
  userId: string;
  title: string;
  status: string;
  createdAt: string;
}

export interface Analytics {
  id: string;
  contentId: string;
  engagement: number;
  reach: number;
  clicks: number;
  createdAt: string;
}

export interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}