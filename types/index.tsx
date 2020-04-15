export interface ImageData {
  id: string;
  path: string;
}

export interface ProjectData {
  id: string;
  title: string;
  headline: string;
  description: string;
  info: string;
  feedback?: string;
  comment?: string;
  images: ImageData[];
}
