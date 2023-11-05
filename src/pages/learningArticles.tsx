import SafeExchange from "@pagesComp/home/content/safeExchange";
import Articles from "@pagesComp/learningArticles/articles";
import BannerLearningArticles from "@pagesComp/learningArticles/banner";

export default function LearningArticlesPage() {
  return (
    <>
      <BannerLearningArticles />
      <Articles />
      <SafeExchange />
    </>
  );
}
