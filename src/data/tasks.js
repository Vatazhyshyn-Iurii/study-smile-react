export const tasks = {
  1: {
    dustbins: [
      {
        lastDroppedItem: null,
        accepts: 'circle',
        styles: {
          width: '70px',
          height: '70px',
          background: 'url(https://firebasestorage.googleapis.com/v0/b/study-smile-e1475.appspot.com/o/circle-container.png?alt=media&token=bab3b2a3-0309-4266-b173-b2fbde9f7eb1) no-repeat center',
          right: '-150px',
          backgroundSize: 'cover',
          marginTop: '50px',
        }
      },
      {
        lastDroppedItem: null,
        accepts: 'oval',
        styles: {
          position: 'relative',
          width: '100px',
          height: '50px',
          background: 'url(https://firebasestorage.googleapis.com/v0/b/study-smile-e1475.appspot.com/o/oval-container.png?alt=media&token=10b547cd-6800-43c0-854c-9ba94300627d) no-repeat center',
          backgroundSize: 'cover',
        }
      },
      {
        lastDroppedItem: null,
        accepts: 'rectangle',
        styles: {
          position: 'relative',
          width: '70px',
          height: '100px',
          background: 'url(https://firebasestorage.googleapis.com/v0/b/study-smile-e1475.appspot.com/o/rectangle-container.png?alt=media&token=31be1ed8-7036-481b-b799-fa2e74d564d7) no-repeat center',
          right: '-50px',
          backgroundSize: 'cover',
          marginTop: '50px',
        }
      },
      {
        lastDroppedItem: null,
        accepts: 'square',
        styles: {
          position: 'relative',
          width: '70px',
          height: '70px',
          background: 'url(https://firebasestorage.googleapis.com/v0/b/study-smile-e1475.appspot.com/o/square-container.png?alt=media&token=88e71260-41bc-4e20-a31b-ccdaf2a1165c) no-repeat center',
          backgroundSize: 'cover',
          right: '-70px',
        }
      },
      {
        lastDroppedItem: null,
        accepts: 'triangle',
        styles: {
          position: 'relative',
          width: '110px',
          height: '90px',
          background: 'url(https://firebasestorage.googleapis.com/v0/b/study-smile-e1475.appspot.com/o/triangle-container.png?alt=media&token=d175aa5d-acc5-4d91-ab8a-2b050c0f4221) no-repeat center',
          right: '-150px',
          backgroundSize: 'cover',
          marginTop: '-50px',
        }
      },
    ],
    boxes: [
      {
        type: 'rectangle',
        styles: {
          position: 'absolute',
          left: '20px',
          width: '55px',
          height: '90px',
          backgroundColor: '#1f3593'
        }
      },
      {
        type: 'square',
        styles: {
          display: 'block',
          width: '55px',
          height: '55px',
          position: 'absolute',
          right: '50px',
          top: '20px',
          backgroundColor: '#00b43e'
        }
      },
      {
        type: 'circle',
        styles: {
          width: '55px',
          height: '55px',
          background: '#00aff1',
          borderRadius: '50%',
          border: 'none',
          position: 'absolute',
          left: '100px',
          top: '140px',
        }
      },
      {
        type: 'triangle',
        styles: {
          width: '0',
          height: '0',
          borderLeft: '40px solid transparent',
          borderRight: '40px solid transparent',
          borderBottom: '80px solid #ff151f',
          position: 'absolute',
          right: '50px',
          bottom: '10px'
        }
      },
      {
        type: 'oval',
        styles: {
          width: '90px',
          height: '45px',
          background: '#fff100',
          borderRadius: '100px / 50px',
          border: 'none',
          position: 'absolute',
          bottom: '10px'
        }
      },
    ],
  },
  2: {
    dustbins: [
      {
        lastDroppedItem: null,
        accepts: 'guelderrose',
        styles: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100px',
          height: '100px',
          backgroundSize: 'contain',
        }
      },
      {
        lastDroppedItem: null,
        accepts: 'carrot',
        styles: {
          width: '100px',
          height: '100px',
          backgroundSize: 'contain',
        }
      },
      {
        lastDroppedItem: null,
        accepts: 'rocket',
        styles: {
          width: '100px',
          height: '100px',
          backgroundSize: 'contain',
        }
      },
      {
        lastDroppedItem: null,
        accepts: 'sunflower',
        styles: {
          width: '100px',
          height: '100px',
          backgroundSize: 'contain',
        }
      },
      {
        lastDroppedItem: null,
        accepts: 'hat',
        styles: {
          position: 'absolute',
          left: '220px',
          width: '90px',
          height: '90px',
          backgroundSize: 'contain',
        }
      },
      {
        lastDroppedItem: null,
        accepts: 'pyramid',
        styles: {
          position: 'absolute',
          left: '220px',
          top: '100px',
          width: '100px',
          height: '100px',
          backgroundSize: 'contain',
        }
      },
    ],
    boxes: [
      {
        type: 'carrot',
        styles: {
          position: 'absolute',
          top: '100px',
          left: '100px',
          width: '100px',
          height: '100px',
          background: 'url(../img/carrot.png) no-repeat center',
          backgroundSize: 'contain',
        }
      },
      {
        type: 'rocket',
        styles: {
          position: 'absolute',
          width: '100px',
          height: '100px',
          background: 'url(../img/rocket.png) no-repeat center',
          backgroundSize: 'contain',
        }
      },
      {
        type: 'hat',
        styles: {
          position: 'absolute',
          left: '220px',
          width: '90px',
          height: '90px',
          background: 'url(../img/hat.png) no-repeat center',
          backgroundSize: 'contain',
        }
      },
      {
        type: 'sunflower',
        styles: {
          position: 'absolute',
          top: '100px',
          width: '100px',
          height: '100px',
          background: 'url(../img/sunflower.png) no-repeat center',
          backgroundSize: 'contain',
        }
      },
      {
        type: 'pyramid',
        styles: {
          position: 'absolute',
          left: '220px',
          top: '100px',
          width: '100px',
          height: '100px',
          background: 'url(../img/pyramid.png) no-repeat center',
          backgroundSize: 'contain',
        }
      },
      {
        type: 'guelderrose',
        styles: {
          position: 'absolute',
          left: '100px',
          width: '100px',
          height: '100px',
          background: 'url(../img/guelderrose.png) no-repeat center',
          backgroundSize: 'contain',
        }
      },
    ]
  },
};

// export const boxStyles = "position: 'absolute', left: '20px', width: '55px', height: '90px', backgroundColor: '#1f3593'";
// export const dustStyles = "position: 'relative', width: '100px', height: '50px', background: 'url(../img/oval-container.png) no-repeat center', backgroundSize: 'cover'";
