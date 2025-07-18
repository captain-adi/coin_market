import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { ICoinDetails } from "@/types/coinDataType";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ICoinLinks {
  data: ICoinDetails["links"] | undefined;
}

function CoinLinks({ data }: ICoinLinks) {
    const extractDomain = (url: string) => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};
   const cardData = [
    { title: "Website", values: data?.homepage },
    { title: "Explorers", values: data?.blockchain_site },
    { title: "Official Forum", values: data?.official_forum_url },
    { title: "Source Code", values: data?.repos_url?.github },
    { title: "Community", values: [data?.subreddit_url, data?.twitter_screen_name && `https://twitter.com/${data.twitter_screen_name}`] },
  ];
  return (
    <Card className="mt-4">
      <CardTitle className="text-xl px-4 pt-4">Info</CardTitle>
      <CardContent className="space-y-4">
        {cardData.map((section, idx) => {
          const validLinks = section.values?.filter((link) => link && link.trim() !== "");
          if (!validLinks || validLinks.length === 0) return null;

          return (
            <div key={idx} className="flex justify-between items-center">
              <span className="font-medium">{section.title}</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-fit py-1 px-3 text-sm">
                    Open
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {validLinks.slice(0, 5).map((link, index) => (
                    <DropdownMenuItem key={index}>
                      <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">
                        {extractDomain(link)}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

export default CoinLinks;
