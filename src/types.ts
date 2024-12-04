export interface NPMPackage {
  name: string
  description: string
  creator: string
  info: string
  link: string
}

export interface NPMProfile {
  username: string
  fullName: string
  githubUsername: string
  githubLink: string
  totalPackages: string
}

export interface FetchNPMProfileArgs {
  npmUsername: string
}

export interface FetchNPMProfileResult {
  profile: NPMProfile,
  packages: NPMPackage[]
}