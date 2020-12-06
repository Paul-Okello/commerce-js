import React from "react";

const AddressFrom = () => {
  const methods = useForm();
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressFrom;
