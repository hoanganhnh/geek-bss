import React from 'react'
import { Container, Typography, Stack } from '@mui/material'
import useSWR from 'swr'

import { getCategories } from '@/services/category.service'
import CategoryItem from './CategoryItem'

function CategoriesList() {
  const { data: categories, mutate } = useSWR('api/category', () =>
    getCategories()
  )

  return (
    <Container maxWidth="xl" sx={{ marginTop: 3, padding: '24px 0' }}>
      <Typography component="h1" variant="h4">
        List Categories :
      </Typography>
      {categories ? (
        <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
          {categories.map((category) => (
            <CategoryItem
              mutate={mutate}
              category={category}
              key={category.id}
            />
          ))}
        </Stack>
      ) : (
        'No category'
      )}
    </Container>
  )
}

export default CategoriesList
