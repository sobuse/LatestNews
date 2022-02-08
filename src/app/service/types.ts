export interface ApiResponse {
  status: string;
  totalResults: number;
  results: NewsItem[];
}

 export interface NewsItem {
  title: string;
  link: string;
  keywords: string[];
  creator: any;
  video_url: string;
  description: string;
  content: string;
  pubDate: string;
  image_url: string;
  source_id: string;
  country: string[];
  category: string[];
  language: string;
}

