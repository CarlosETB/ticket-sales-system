import React from 'react'

// Private
import { 
    Container, 
    Image, 
    Content, 
    Title,
    Date,
    Address
} from './styles'

interface LayoutProps {
    items?: {
        id?: number;
        name?: string;
        hour?: string;
        date?: string;
    }
}
 
const ItemCard: React.FC<LayoutProps> = (props) => {
    const { items } = props

    const img = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fwww.wiwigo.com%2Fblog%2Fwp-content%2Fuploads%2F2015%2F05%2Fevent-coordinator-wiwigo.jpg%3Fresize%3D3008%252C2000%26ssl%3D1&f=1&nofb=1'

    return (
        <Container>
            <Image src={img} /> 
            <Content>
                <Date>
                    {items?.date} - {items?.hour}
                </Date>
                <Title>{items?.name}</Title>
                <Address>Rua Carlos Alberto Nemézio - Jardim Leonor, Paulínia - SP</Address>
            </Content>
        </Container>
    )
}

export default ItemCard