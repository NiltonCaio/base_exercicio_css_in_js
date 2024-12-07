import { FormEvent, useState } from 'react'

import { BtnEstilo, FormEstilo, InputEstilo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormEstilo onSubmit={aoEnviarForm}>
      <InputEstilo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnEstilo type="submit">Pesquisar</BtnEstilo>
    </FormEstilo>
  )
}
export default FormVagas
