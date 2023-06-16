import { useDispatch } from 'react-redux'
import { getAllArticleThunk } from '../modules/article/article_reducer/adapter/api/getAllArticle.thunks'


function Articles() {
    const dispatch: any = useDispatch()

    const getAllArticles = () => {
        dispatch(getAllArticleThunk())
    }

    return (<>
        <div>Articles</div>
        <button onClick={getAllArticles}>Get All Articles</button>
    </>
    )
}
export default Articles
