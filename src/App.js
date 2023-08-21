import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { UserProvider } from './Usercontext';


import Homepage from './Homepage';
import Loggedin from './Loggedin';
import Adminpage from './Adminpage'
import Adminpanel from './Adminpanel';


import Login from './Login';
import Register from './Register';

import Healthknowledge from './Healthknowledge';
import Addjournal from './Addjournal';
import Searchjournal from './Searchjournal';
import AllJournal from './Alljournal';


import Healthactivities from './Healthactivities';
import Addactivities from './Addactivities';

import Personalprofile from './Personalprofile';




import Support from './Support'
import Adminsupport from './Adminsupport';



function App() {
  return (
<UserProvider>
  <div id="container">
    <Router>
      <div>
        <nav>
          <ul>
            {/* Add your navigation items here */}
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/Loggedin" element={<Loggedin />} />
          <Route path="/Adminpage" element={<Adminpage />} />
          <Route path="/Adminpanel" element={<Adminpanel />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />

          <Route path="/Healthknowledge" element={<Healthknowledge />} />
          <Route path="/Addjournal" element={<Addjournal />} />
          <Route path="/Searchjournal" element={<Searchjournal />} />
          <Route path="/AllJournal" element={<AllJournal />} />

          <Route path="/Healthactivities" element={<Healthactivities />} />
          <Route path="/Addactivities" element={<Addactivities />} />

          <Route path="/Personalprofile" element={<Personalprofile />} />





          <Route path="/Support" element={<Support />} />
          <Route path="/Adminsupport" element={<Adminsupport />} />
        </Routes>
      </div>
    </Router>
  </div>
</UserProvider>

  );
}



export default App;
