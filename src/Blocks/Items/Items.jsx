import * as S from './StyleItems'
import AxiosGet from '../Json/JsonItems'

function Items() {
  return (
    <div>
      <S.ItemWrapper>
        <AxiosGet />
      </S.ItemWrapper>
    </div>
  )
}

export default Items
