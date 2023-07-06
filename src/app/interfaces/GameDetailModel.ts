export interface GameDetailModel {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  minimum_system_requirements: Requirements;
  screenshots: Screenshot[]
}

interface Requirements {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

interface Screenshot {
  id: number;
  image: string;
}