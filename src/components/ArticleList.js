import React from "react"
import Article from "./Artitle"

function ArticleList({ articles }) {
  const articleItem = articles.map((article) => {
    return (
      <Article
        key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview}
        minutes={article.minutes}
      />
    )
  })
  return <main>{articleItem}</main>
}
export default ArticleList
