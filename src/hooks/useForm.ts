import { ChangeEvent } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (setFormData?: any) => {
  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((formData: any) => { return { ...formData, [name]: value } });
  }

  const handleInputDateChange = async (
      event: ChangeEvent<HTMLInputElement>
    ) => {

    const { name, value } = event.target;

    const d = new Date(value);
    const wd = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(d);
    const ye = new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('pt-BR', { day: '2-digit' }).format(d);

    const formatDate = `${wd} ${da} ${mo} ${ye}`;

    setFormData((formData?: any) => { 
      return { ...formData, [name]: formatDate.toUpperCase() } 
    });
  };

  return {
    handleInputChange,
    handleInputDateChange
  }
}
