import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="py-20 text-center lg:py-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-200 sm:text-7xl">
        Get{' '}
        <span className="relative whitespace-nowrap text-blue-200">
          <span className="relative">insight</span>
        </span>{' '}
        into your engineering team
      </h1>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="https://github.com/devhub-tools/helm-charts/tree/main/charts/devhub" color="blue">Get started</Button>
      </div>
    </Container>
  )
}
