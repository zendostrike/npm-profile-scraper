import axios from "axios";
import * as cheerio from "cheerio";

import type {
  FetchNPMProfileArgs,
  FetchNPMProfileResult,
  NPMPackage, NPMProfile
} from "./types";

import { SELECTORS, NPM_BASE_URL } from "./constants";

const fetchNPMProfile = async ({ npmUsername } : FetchNPMProfileArgs) : Promise<FetchNPMProfileResult> => {
  const { data } = await axios.get(NPM_BASE_URL + npmUsername);

  if (!data) {
    throw new Error('Could not get any information.')
  }

  const $ = cheerio.load(data);

  const username = $(SELECTORS.username).text().trim();
  const fullName = $(SELECTORS.fullName).text().trim();
  const githubUsername = $(SELECTORS.githubUsername).text().trim();
  const githubLink = $(SELECTORS.githubLink).attr('href')
  const totalPackages = $(SELECTORS.totalPackages).text().trim();

  const packages = $(SELECTORS.packageItem).toArray().map((el) => {
    const packageName = $(el).find(SELECTORS.packageName).text().trim()
    const packageCreators = $(el).find(SELECTORS.packageCreator).text().trim()
    const packageDescriptions = $(el).find(SELECTORS.packageDescription).text().trim()
    const packageInfos = $(el).find(SELECTORS.packageInfo).text().trim()
    const packageLink = $(el).find(SELECTORS.packageLink).first().attr('href')

    return {
      name: packageName,
      creator: packageCreators,
      description: packageDescriptions,
      info: packageInfos,
      link: packageLink
    } as NPMPackage;
  })

  return {
    profile: {
      fullName,
      githubUsername,
      totalPackages,
      username,
      githubLink
    } as NPMProfile,
    packages
  }
}

export default fetchNPMProfile