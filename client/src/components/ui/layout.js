import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  ${({ xs }) => (xs ? `flex: 0 0 ${(xs / 12) * 100}%; max-width: ${(xs / 12) * 100}%;` : '')}

  @media (min-width: 576px) {
    ${({ sm }) => sm && `flex: 0 0 ${(sm / 12) * 100}%; max-width: ${(sm / 12) * 100}%;`}
  }

  @media (min-width: 768px) {
    ${({ md }) => md && `flex: 0 0 ${(md / 12) * 100}%; max-width: ${(md / 12) * 100}%;`}
  }

  @media (min-width: 992px) {
    ${({ lg }) => lg && `flex: 0 0 ${(lg / 12) * 100}%; max-width: ${(lg / 12) * 100}%;`}
  }

  @media (min-width: 1600px) {
    ${({ xl }) => xl && `flex: 0 0 ${(xl / 12) * 100}%; max-width: ${(xl / 12) * 100}%;`}
  }
`
