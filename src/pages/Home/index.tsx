import React from 'react'

// Components
import PageDefault from 'components/PageDefault'
import Carousel from 'components/Carousel'

// Data
import initialData from 'data/initialData.json'

const Login: React.FC = () => {

    const category = {
        title: 'Teste'
    }

    return (
        <PageDefault>
            <h1>Home</h1>
            <Carousel 
                category={category}
                items={initialData.events}
            />
        </PageDefault>
    )
}

export default Login