import Footer from './components/footer'
import Header from './components/header'
import Body from './components/body'
import {getDictionary} from '../../../utils/get-dictionary'
import type {ILang} from './layout'


export default async function Home({params}: {params: ILang}) {

  
const dictionary = await getDictionary(params.lang)

  return (
    <>
    <Header dictionary={dictionary.header}/>
    <Body dictionary={dictionary.main}/>
    <Footer dictionary={dictionary.footer}/>
    </>
  )
}
