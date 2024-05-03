import BackButton from "@/components/BackButton/BackButton";
import Question from "@/components/Question/Question";
import { fetchQuestion } from "@/fetching/fetchQuestion";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

async function QuestionPage({ params }: { params: { id: number } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["question"],
    queryFn: async () => {
      return fetchQuestion({ id: params.id });
    },
  });
  return (
    <>
      <BackButton />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Question id={params.id} />
      </HydrationBoundary>
    </>
  );
}

export default QuestionPage;
