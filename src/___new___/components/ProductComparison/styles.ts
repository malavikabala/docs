export default {};

export const sectionOuterStyles = (hasDarkBg: boolean) => ({
  flexDirection: 'column',
  h: 'auto',
  w: '100%',
  bg: hasDarkBg ? 'linear-gradient(105.96deg, #0964AD 56.79%, #06547A 100%)' : 'tigeraGrey.100',
  pb: '60px',
});

export const tableContainerStyle = {
  justifyContent: 'center',
  // width: '1660px',
  // alignSelf: 'center',
  // textAlignLast: 'center',
  alignItems: 'center',
  p: 8,
};

export const headerTextStyle = {
  textAlign: 'center',
  pt: 14,
  mb: 4,
};

export const subHeaderTextStyle = {
  fontWeight: '600',
  textAlign: 'center',
  mt: 7,
  fontSize: '2xl',
  lineHeight: 9,
};

export const innerTextStyle = {
  textAlign: 'center',
  fontSize: 'xl',
  fontWeight: 'normal',
  color: 'tigeraGrey.800',
  mx: '44px',
  mb: 10,
  mt: 2,
  lineHeight: 8,
};

export const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  pt: '44px',
};

export const iconStyle = {
  width: '64px',
  height: '64px',
};

export const rectangleStyle = {
  width: ['100%', '371px'],
  border: '1px',
  borderColor: 'tigeraCloudGrey',
  borderRadius: 'lg',
  bg: 'tigeraWhite',
  ml: [0, 4],
  mr: [0, 4],
  mt: [4, 4, 4, 4, ''],
  mb: [4, 4, 4, 4, ''],
  pb: '40px',
};

export const actionBoxStyles = {
  mb: 14,
  justifyContent: 'center',
};