import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  href,
  features,
  featured = false,
}: {
  name: string
  price: string
  description: string
  href: string
  features: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-blue-200 py-8 lg:order-none' : 'bg-gray-600 lg:py-8',
      )}
    >
      <h3 className={clsx("mt-5 font-display text-lg", featured ? 'text-gray-900' : 'text-gray-50')}>{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-gray-900' : 'text-gray-200',
        )}
      >
        {description}
      </p>
      <p className={clsx("order-first font-display text-5xl font-light tracking-tight", featured ? 'text-gray-900' : 'text-gray-50')}>
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-gray-900' : 'text-gray-100',
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'fill-gray-900' : 'fill-gray-50'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color="slate"
        className="mt-8"
        aria-label={`Get started with the ${name} plan for ${price}`}
      >
        Get started
      </Button>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-gray-800 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-gray-50 sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <span className="relative">Pricing</span>
            </span>
          </h2>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Free"
            price="$0/month"
            description="For small businesses needing tools to support their developers."
            href="https://github.com/devhub-tools/helm-charts/tree/main/charts/devhub"
            features={[
              'Up to 10 users',
              'Organization metrics',
              'Developer dashboard',
              'QueryDesk',
              'Code coverage tracking',
              'Service uptime monitoring',
            ]}
          />
          <Plan
            featured
            name="Core"
            price="$275/month"
            description="For businesses needing more details into their engineering teams."
            href="https://github.com/devhub-tools/helm-charts/tree/main/charts/devhub"
            features={[
              '25 users included',
              '$10/seat for additional users',
              'Detailed metric views',
              'Historical uptime tracking',
              'Query reviews',
              'Code coverage dashboard',
            ]}
          />
          <Plan
            name="Scale"
            price="$475/month"
            description="For businesses with compliance requirements or advanced metrics."
            href="https://github.com/devhub-tools/helm-charts/tree/main/charts/devhub"
            features={[
              '25 users included',
              '$15/seat for additional users',
              'View metrics by team',
              'All features',
              'Audit log',
              'Dedicated slack channel',
            ]}
          />
        </div>
      </Container>
    </section>
  )
}
