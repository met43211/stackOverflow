import BackButton from "@/components/BackButton/BackButton";
import Comments from "@/components/Comments/Comments";
import Question from "@/components/Question/Question";
import { fetchComments } from "@/fetching/fetchComments";
import { fetchQuestion } from "@/fetching/fetchQuestion";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

async function QuestionPage({ params }: { params: { id: number } }) {
  const questionQueryClient = new QueryClient();
  await questionQueryClient.prefetchQuery({
    queryKey: ["question"],
    queryFn: async () => {
      return fetchQuestion({ id: params.id });
    },
  });
  const commentsQueryClient = new QueryClient();
  await commentsQueryClient.prefetchQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      return fetchComments({ id: params.id });
    },
  });
  return (
    <>
      <BackButton />
      <HydrationBoundary state={dehydrate(questionQueryClient)}>
        <Question id={params.id} />
      </HydrationBoundary>
      <HydrationBoundary state={dehydrate(commentsQueryClient)}>
        <Comments id={params.id} />
      </HydrationBoundary>
    </>
  );
}

export default QuestionPage;
