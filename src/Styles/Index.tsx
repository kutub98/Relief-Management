import backgroundImage from '../assets/image.jpg';

// hero section start
export const contentStyle: React.CSSProperties = {
  color: '#fff',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '500px',
  position: 'relative',
};

export const textStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  margin: ' auto',
};

export const imageStyle: React.CSSProperties = {
  width: '350px',
  height: '400px',
};
export const BackgroundColor: React.CSSProperties = {
  background:
    'linear-gradient(90deg, rgba(65, 82, 224, 0.4), rgba(186, 17, 244, 0.5))',
  boxShadow: '0px, 6px, 16px, 0px rgba(0, 0, 0, 0.8)',
  width: '100%',
  height: '500px',
};
export const PrimaryBg: React.CSSProperties = {
  background: 'linear-gradient(90deg, rgba(65, 82, 224), rgba(186, 17, 244))',
  boxShadow: '0px, 6px, 16px, 0px rgba(0, 0, 0, 0.8)',
};

// hero section end

// testimoialCard

export const ClipPath: React.CSSProperties = {
  clipPath:
    'polygon(0% 0%, 100.1% 0%, 100.1% 89%, 89.4% 100%, 10.6% 100.3%, 0% 89%)',
};
export const ClipPath2: React.CSSProperties = {
  clipPath:
    'polygon(10.2% 0%, 89.8% 0%, 100.1% 10%, 100.1% 100.3%, 0% 100.3%, 0% 10%)',
};
