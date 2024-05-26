import { FaFacebook } from 'react-icons/fa6';
import { LiaLinkedinIn } from 'react-icons/lia';
import { SlCallIn } from 'react-icons/sl';
import { MdEmail } from 'react-icons/md';
import img from '../../../assets/1.png';
import { ClipPath, ClipPath2, PrimaryBg } from '../../../Styles/Index';

const TestimonialCard = () => {
  return (
    <div
      className="cardhover"
      style={{
        position: 'relative',
        height: '450px',
        background: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        margin: '0 auto',
        color: 'black',
        ...PrimaryBg,
      }}
    >
      {/* top  */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          background: 'white',
          textAlign: 'center',
          height: '100px',
          padding: '20px',
          width: '100%',
          ...ClipPath,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            color: 'red',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', gap: '20px' }}>
            <SlCallIn />
            <FaFacebook />
            <LiaLinkedinIn />
          </div>
        </div>
        <h1>Happy Client</h1>
      </div>

      <div
        style={{
          position: 'absolute',
          top: '25%',
          background: 'white',
          height: '100px',
          width: '100px',
          margin: '0 auto',
          borderRadius: '50%',
          padding: '8px',
          border: '1px solid yellow',
        }}
      >
        <img src={img} style={{ height: '100%', width: '100%' }} alt="" />
      </div>

      {/* bottom  */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          background: 'white',
          textAlign: 'center',
          ...ClipPath2,
        }}
      >
        <h1 style={{ margin: '8px' }}>Johon Doe</h1>
        <h6 style={{ margin: '8px' }}>Lorem ipsum dolor sit amet.</h6>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            margin: '8px',
          }}
        >
          <span
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              background: 'yellow',
              gap: '8px',
            }}
          ></span>
          <span
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              background: 'yellow',
              gap: '8px',
            }}
          ></span>
          <span
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              background: 'yellow',
              gap: '8px',
            }}
          ></span>
          <span
            style={{
              height: '10px',
              width: '10px',
              borderRadius: '50%',
              background: 'yellow',
              gap: '8px',
            }}
          ></span>
        </div>

        <div
          style={{
            height: '5px',
            width: '90%',
            margin: '10px auto',
            ...PrimaryBg,
          }}
        ></div>
        <span style={{ padding: '20px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          rerum incidunt quod.
        </span>
        <div style={{ padding: '20px' }}>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'space-between',
            }}
          >
            <span>+800010458854</span>
            <MdEmail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
