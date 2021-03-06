import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.p`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  /* o min diz o tamanho minimo qnd alcançar mais q 30rem ele trava nele, caso contrario sempre sera 100% */
  width: min(30rem, 100%);
`
