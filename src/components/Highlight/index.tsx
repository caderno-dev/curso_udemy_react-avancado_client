import Button from 'components/Button'
import * as S from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  backgroundImage: string
  floatImage?: string
  buttonLabel: string
  buttonLink: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  backgroundImage,
  alignment = 'right',
  floatImage,
  buttonLabel,
  buttonLink
}: HighlightProps) => (
  <S.Wrapper alignment={alignment} backgroundImage={backgroundImage}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
