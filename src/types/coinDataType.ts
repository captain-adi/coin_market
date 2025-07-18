export interface IMarketData {
  current_price: Record<string, number>;
  market_cap: Record<string, number>;
  total_volume: Record<string, number>;
  high_24h: Record<string, number>;
  low_24h: Record<string, number>;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: Record<string, number>;
  atl: Record<string, number>;
}

export interface ICommunityData {
  facebook_likes: number | null;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  telegram_channel_user_count: number | null;
}

export interface IDeveloperData {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: {
    additions: number;
    deletions: number;
  };
  commit_count_4_weeks: number;
}

export interface ILinks {
  homepage: string[];
  blockchain_site: string[];
  official_forum_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  subreddit_url: string;
  repos_url: {
    github: string[];
    bitbucket: string[];
  };
}

export interface IImage {
  thumb: string;
  small: string;
  large: string;
}

export interface ICoinDetails {
  id: string;
  symbol: string;
  name: string;
  asset_platform_id: string | null;
  block_time_in_minutes: number;
  hashing_algorithm: string | null;
  categories: string[];
  description: {
    [language: string]: string;
  };
  links: ILinks;
  image: IImage;
  market_data: IMarketData;
  community_data: ICommunityData;
  developer_data: IDeveloperData;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  last_updated: string;
}
