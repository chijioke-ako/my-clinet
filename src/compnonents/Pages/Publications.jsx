import './Publication.css';

function Publications() {
  return (
    <>
      <div className="jumbotron-banner">
        <div className="publiction-background">
          <div
            style={{
              textAlign: 'start',
              color: 'white',
              fontFamily: ['Miriam Libre '].join(','),
            }}
          >
            <div
              style={{ fontWeight: 'bold', fontSize: '3rem', padding: '8rem' }}
            >
              Publications.
            </div>
          </div>
        </div>
      </div>
      Pub
    </>
  );
}

export default Publications;
