import { CardTitle, Card, CardContent } from "@/components/ui/card";
import type { ICoinDetails } from "@/types/coinDataType";
import {
  Star,
  GitBranch,
  Eye,
  Bug,
  CheckCircle,
  Code2,
  Users,
  Clock3,
} from "lucide-react";

interface IDeveloperData {
  data: ICoinDetails["developer_data"];
}

function DeveloperData({ data }: IDeveloperData) {
  return (
    <Card className="p-4 shadow-xl rounded-2xl">
      <CardTitle className="text-xl font-bold mb-4">Developer Stats</CardTitle>
      <CardContent className="grid grid-cols-2  sm:grid-cols-3 gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-yellow-500" />
          <span><strong>Stars:</strong> {data.stars}</span>
        </div>
        <div className="flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-blue-500" />
          <span><strong>Forks:</strong> {data.forks}</span>
        </div>
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-green-600" />
          <span><strong>Subscribers:</strong> {data.subscribers}</span>
        </div>
        <div className="flex items-center gap-2">
          <Bug className="h-4 w-4 text-red-500" />
          <span><strong>Total Issues:</strong> {data.total_issues}</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-500" />
          <span><strong>Closed Issues:</strong> {data.closed_issues}</span>
        </div>
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-purple-500" />
          <span><strong>PRs Merged:</strong> {data.pull_requests_merged}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-indigo-500" />
          <span><strong>PR Contributors:</strong> {data.pull_request_contributors}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="h-4 w-4 text-pink-500" />
          <span><strong>Commits (4 weeks):</strong> {data.commit_count_4_weeks}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default DeveloperData;
