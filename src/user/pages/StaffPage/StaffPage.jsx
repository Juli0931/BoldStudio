import { StaffMember, HeaderTitle } from './../../components'; 

//Pendiente de agregar las fotos
const staffData = [
  { img: '', role: 'FRONTEND DEVELOPER' },
  { img: '', role: 'BACKEND DEVELOPER' },
  { img: '', role: 'UI DESIGNER' },
  { img: '', role: 'UX DESIGNER' },
];

export function StaffPage (){
  return (
    <div className='staffBody'>
      {showTitle && (
        <div className="title">
          <HeaderTitle title="Staff"/>
        </div>
      )}
      
      <div className="staffMembers" ref={staffSectionRef}>
        {staffData.map((staff, index) => (
          <StaffMember 
            key={index} 
            img={staff.img} 
            role={staff.role} 
            backgroundColor={colors[index % colors.length]}
          />
        ))}
      </div>
    </div>
  );
}
