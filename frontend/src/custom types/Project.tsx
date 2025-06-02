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
   * The technology used for creating the project.
   */
  tech: string[];
  /**
   * Information about the project
   */
  description: string;
};
