interface OrganizationSchemaProps {
  name: string
  url: string
  description: string
}

interface ProductSchemaProps {
  products: Array<{
    id: number
    name: string
    description: string
    image: string
  }>
}

export function OrganizationSchema({ name, url, description }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name,
    url: url,
    description: description,
    sameAs: [],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ProductSchema({ products }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.image,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
