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

export interface ProjectsData {
  projects: ProjectData[];
  order: string[];
}

export interface ProjectRefData {
  id: string;
  imageIndex: number;
}

export interface TitlesData {
  title: string;
  subtitle: string;
  project: ProjectRefData;
}

export interface ApproachSectionData {
  title: string;
  content: string[];
}

export interface AboutSectionData {
  title: string;
  content: string;
  project?: ProjectRefData;
}

export interface SectionData {
  title: string;
  content?: string | string[];
}

export interface SectionsData {
  about: AboutSectionData;
  approach: ApproachSectionData;
  [section: string]: SectionData;
}

export interface Data {
  titles: TitlesData;
  projects: ProjectsData;
  sections: SectionsData;
}
