export type SocialInfo = {
  /**
   * Social name.
   */
  socialName: string;
  /**
   * URL link to social site
   */
  socialLink: string;
};

export type Project = {
  /**
   * Unique identifer for each project
   */
  id: number;
  /**
   * Project Name.
   */
  name: string;
  /**
   * Links to social sites.
   */
  socials: SocialInfo[];
  /**
   * Information about the project
   */
  description: string;
};
