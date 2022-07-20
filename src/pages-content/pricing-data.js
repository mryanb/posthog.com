import { StaticImage } from 'gatsby-plugin-image'
import imgEnterprise1 from '../images/plan-enterprise1.svg'
import imgEnterprise2 from '../images/plan-enterprise2.svg'
import React from 'react'

const plans = {
    enterprise: [
        {
            title: 'Enterprise',
            image: imgEnterprise1,
            popular: false,
            price: 'Starts at $2k',
            priceDetail: '/month',
            description: 'Ideal for companies need scalability and enterprise features',
            callToAction: 'Contact sales',
            callToActionDest: {
                type: 'url',
                value: 'mailto:sales@posthog.com?subject=Enquiry%20about%20enterprise%20supported%20plan',
            },
            benefits: [
                '<span class="p-plan-benefit-lg">Everything in Open Source, plus:</span>',
                'ClickHouse database for Petabyte scale',
                'Integrations with services like Zapier',
                'Permissioning and multiple projects',
                'Dedicated support',
                'SSO/SAML',
                'Export to data lakes',
            ],
        },
        {
            title: 'Supported Enterprise',
            image: imgEnterprise2,
            popular: true,
            price: 'Custom',
            priceDetail: 'contact us',
            description:
                'Ideal for companies that do not want the hassle of managing PostHog, but want to own their data.',
            callToAction: 'Contact sales',
            wraps: false,
            callToActionDest: {
                type: 'url',
                value: 'mailto:sales@posthog.com?subject=Enquiry%20about%20enterprise%20supported%20plan',
            },
            benefits: [
                '<span class="p-plan-benefit-lg">Everything in Enterprise, plus:</span>',
                'PostHog deploys and maintains everything (in your own infrastructure)',
                'Uptime and scalability SLAs',
            ],
        },
    ],
}
const faqs = [
    {
        q: 'How do I know what my volume is?',
        a: 'The easiest way is to enable a PostHog Cloud plan. If you go over your usage limit but have not set up billing, it will lock you out but it will count the event volumes. This allows you to get a sense of what your volume is.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team.png" />,
                name: 'Tim Glaser',
            },
        },
    },
    {
        q: 'Can I switch between PostHog Cloud and Self-hosted plans?',
        a: 'You can switch from PostHog Cloud to Self-hosted Scale and vice versa - just email our support team (hey@posthog.com). We will manually transfer your data, free. If you are switching between PostHog Cloud and Self-hosted Open Source then you can transfer events yourself using our plugin - https://github.com/PostHog/posthog-plugin-migrator3000.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-1.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-1.png" />,
                name: 'Yakko Majuri',
            },
        },
    },
    {
        q: 'On the Self-hosted Open Source plan, what happens if I exceed 1 million tracked users?',
        a: 'There is no hard limit set. You may likely need some kind of support at this scale.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-2.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-2.png" />,
                name: 'James Greenhill',
            },
        },
    },
    {
        q: 'Do I pay anything for stored events?',
        a: 'No, you only pay the fee per captured event in a given month (i.e. you only pay when each event is first received). There are no additional costs or fees.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-3.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-3.png" />,
                name: 'Simon Fisher',
            },
        },
    },
    {
        q: 'Does session recording impact costs?',
        a: 'Session recording is currently free to use. This might change in the future.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-4.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-4.png" />,
                name: 'Rick Marron',
            },
        },
    },
    {
        q: 'How long do you retain data?',
        a: 'Data (except recordings, see below) in PostHog Cloud is retained for 7 years - after 1 year, data may be moved into cold storage so queries may run more slowly. For Self-hosted deployments, you can manage this yourself or get support with Self-hosted Scale.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-5.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-5.png" />,
                name: 'Tiina Turban',
            },
        },
    },
    {
        q: 'How long do you retain recordings?',
        a: 'Recordings are kept on Clickhouse-based installations for 3 weeks. If you are self-hosting, you can change this setting (see Recordings docs). If you are on legacy Postgres recordings are kept indefinitely unless you set a custom retention policy.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-6.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-6.png" />,
                name: 'Rick Marron',
            },
        },
    },
    {
        q: 'What happens after the data retention period elapses?',
        a: 'On PostHog Cloud, any event or user data stored for more than the retention period may be permanently deleted from our systems. On the Self-hosted Scale plan, you control your data retention and what happens to your data afterwards.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-7.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-7.png" />,
                name: 'Marius Andra',
            },
        },
    },
    {
        q: 'Is there a free trial on paid plans?',
        a: 'No - instead we offer a contract with no minimum length. In PostHog Scale and PostHog Cloud, the first 1 million events are free, every month.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-8.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-8.png" />,
                name: 'Michael Matloka',
            },
        },
    },
    {
        q: 'What currency are your prices in?',
        a: 'All prices are in US Dollars (USD), excluding taxes.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-9.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-9.png" />,
                name: 'James Hawkins',
            },
        },
    },
    {
        q: 'Do you offer a discount for non-profits?',
        a: 'Yes in most cases - 50% off all pricing for PostHog Cloud. Create your account, then email sales@posthog.com from the same email address with some basic details on your organization. We will then apply a discount.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-10.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-10.png" />,
                name: 'Eric Duong',
            },
        },
    },
    {
        q: 'Are there any minimums or annual commitments?',
        a: 'No! We can, however, offer annual commitments (for example, to maintain pricing) if you need them as part of PostHog Enterprise.',
        author: {
            q: {
                image: <StaticImage width={40} src="./images/hog-11.png" />,
            },
            a: {
                image: <StaticImage width={25} src="./images/team-11.png" />,
                name: 'Cameron DeLeone',
            },
        },
    },
]

export { plans, faqs }
