import { useDispatch, useSelector } from 'react-redux'
import {  selectAllArticle} from '../../modules/article/article_reducer'
import { showAllArticles } from '../../modules/article/article_reducer/actions/article.actions'

/*Article va a tener su propio contexto. vamos a usar contex para el manejo de la logica propia de article,
por ejemplo (los filtros, paginacion y otras cosas de las tablas)*/

function Articles() {
    const dispatch: any = useDispatch()

    const listOfArticles = useSelector(selectAllArticle)

    const getAllArticles = () => {
        dispatch(showAllArticles())
    }

    return (<>
        <div>Articles</div>
        <button onClick={getAllArticles}>Get All Articles</button>
    </>
    )
}
export default Articles
