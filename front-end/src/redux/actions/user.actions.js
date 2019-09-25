export const SUBMIT_CREDENTIALS = 'SUBMIT_CREDENTIALS'
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
export const UPDATE_IMAP_SERVER = 'UPDATE_IMAP_SERVER'
export const UPDATE_IMAP_PORT = 'UPDATE_IMAP_PORT'
export const UPDATE_SMTP_SERVER = 'UPDATE_SMTP_SERVER'
export const UPDATE_SMTP_PORT = 'UPDATE_SMTP_PORT'
export const ERROR_SEND_MESSAGE = 'ERROR_SEND_MESSAGE'
export const AUTHENTICATE = 'AUTHENTICATE'
export const UNAUTHENTICATE = 'UNAUTHENTICATE'

export const updateName = (name) => (dispatch) => {
  dispatch({
    type: UPDATE_NAME,
    payload: { name }
  })
}

export const updateEmail = (email) => (dispatch) => {
  dispatch({
    type: UPDATE_EMAIL,
    payload: { email }
  })
}

export const updatePassword = (password) => (dispatch) => {
  dispatch({
    type: UPDATE_PASSWORD,
    payload: { password }
  })
}

export const updateIMAPServer = (imap_server) => (dispatch) => {
  dispatch({
    type: UPDATE_IMAP_SERVER,
    payload: { imap_server }
  })
}

export const updateIMAPPort = (imap_port) => (dispatch) => {
  dispatch({
    type: UPDATE_IMAP_PORT,
    payload: { imap_port }
  })
}

export const updateSMTPServer = (smtp_server) => (dispatch) => {
  dispatch({
    type: UPDATE_SMTP_SERVER,
    payload: { smtp_server }
  })
}

export const updateSMTPPort = (smtp_port) => (dispatch) => {
  dispatch({
    type: UPDATE_SMTP_PORT,
    payload: { smtp_port }
  })
}

export const authenticateUser = () => (dispatch, getState) => {
  const profile = getState().Profile
  if (
    profile.name &&
          profile.email &&
          profile.password &&
          profile.imap_server &&
          profile.imap_port &&
          profile.smtp_server &&
          profile.smtp_port
  ) {
    dispatch({
      type: AUTHENTICATE,
      payload: { validCredentials: true }
    })
  } else {
    dispatch({
      type: UNAUTHENTICATE,
      payload: { validCredentials: false }
    })
  }
}

// const userActions = {
//   SUBMIT_CREDENTIALS: 'SUBMIT_CREDENTIALS',
//   UPDATE_NAME: 'UPDATE_NAME',
//   UPDATE_EMAIL: 'UPDATE_EMAIL',
//   UPDATE_PASSWORD: 'UPDATE_PASSWORD',
//   UPDATE_IMAP_SERVER: 'UPDATE_IMAP_SERVER',
//   UPDATE_IMAP_PORT: 'UPDATE_IMAP_PORT',
//   UPDATE_SMTP_SERVER: 'UPDATE_SMTP_SERVER',
//   UPDATE_SMTP_PORT: 'UPDATE_SMTP_PORT',
//   AUTHENTICATE: 'AUTHENTICATE',
//   UNAUTHENTICATE: 'UNAUTHENTICATE',
//   updateName: (name) => {
//     return (dispatch) => {
//       dispatch({
//         type: userActions.UPDATE_NAME,
//         payload: { name: name }
//       });
//     };
//   },
//   updateEmail: (email) => {
//     return (dispatch) => {
//       dispatch({
//         type: userActions.UPDATE_EMAIL,
//         payload: { email: email }
//       });
//     };
//   },
//   updatePassword: (password) => {
//     return (dispatch) => {
//       dispatch({
//         type: userActions.UPDATE_PASSWORD,
//         payload: { password: password }
//       });
//     };
//   },
//   updateIMAPServer: (imap_server) => {
//     return (dispatch) => {
//       dispatch({
//         type: userActions.UPDATE_IMAP_SERVER,
//         payload: { imap_server: imap_server }
//       });
//     };
//   },
//   updateIMAPPort: (imap_port) => {
//     return (dispatch) => {
//       dispatch({
//         type: userActions.UPDATE_IMAP_PORT,
//         payload: { imap_port: imap_port }
//       });
//     };
//   },
//   updateSMTPServer: (smtp_server) => {
//     return (dispatch) => {
//       dispatch({
//         type: userActions.UPDATE_SMTP_SERVER,
//         payload: { smtp_server: smtp_server }
//       });
//     };
//   },
//   updateSMTPPort: (smtp_port) => {
//     return (dispatch) => {
//       dispatch({
//         type: userActions.UPDATE_SMTP_PORT,
//         payload: { smtp_port: smtp_port }
//       });
//     };
//   },
//   authenticateUser: () => {
//     return (dispatch, getState) => {
//       const profile = getState().Profile;
//       if (
//         profile.name &&
//         profile.email &&
//         profile.password &&
//         profile.imap_server &&
//         profile.imap_port &&
//         profile.smtp_server &&
//         profile.smtp_port
//       ) {
//         dispatch({
//           type: userActions.AUTHENTICATE,
//           payload: { validCredentials: true }
//         });
//       } else {
//         dispatch({
//           type: userActions.UNAUTHENTICATE,
//           payload: { validCredentials: false }
//         });
//       }
//     };
//   }
// };

// export default userActions;
