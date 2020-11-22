import React, { ChangeEvent, FormEvent, useState } from 'react'

// Components
import PageDefault from 'components/PageDefault'
import FormField from 'components/FormField'

// Hooks
import { useForm } from 'hooks'

// Private
import { Title } from './styles'

interface Data {
    eventName: string;
    image: File;
}

const Create: React.FC = () => {
    const [formData, setFormData] = useState<Data>()

    const { handleInputChange } = useForm(setFormData)

    const handleSubmit = async (event: FormEvent) => {

    }

    function handleSelectImage(event: ChangeEvent<HTMLInputElement>) {
        
        const { name, files } = event.target;

        if (!event.target.files) {
          return;
        }
    
        event.target.value = "";

        setFormData((data?: any) => { 
            return { ...data, [name]: files } 
        });

        console.log(files)
      }

    return (
        <PageDefault>
            <Title>Informações do evento</Title>

            <form onSubmit={handleSubmit}>
                <FormField 
                    name='eventName'
                    label='Nome do evento' 
                    value={formData?.eventName}
                    onChange={handleInputChange}
                />

                <FormField 
                    name='eventName'
                    label='Nome do evento' 
                    value={formData?.eventName}
                    onChange={handleInputChange}
                    small
                />

                <div className="input-block">
                    <label htmlFor="images">Fotos</label>

                    <div className="image-container">
                    
                        {/* <img 
                            src={formData?.image.name} 
                            alt={formData?.image.name} 
                        /> */}
                    

                      <label htmlFor="image" className="new-image">
                        {/* <FiPlus size={24} color="#15b6d6" /> */}
                      </label>
                    </div>

                    <input 
                        multiple 
                        onChange={handleSelectImage} 
                        type="file" 
                        id="image"
                        name="image"
                    />
                </div>
            </form>
        </PageDefault>
    )
}

export default Create