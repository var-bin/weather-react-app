import logo from './logo.svg';
import './App.css';
import './App.scss';

function App() {
  return (
    <div className="container pt-4 pb-4">
      <div className="row row-cols-1 row-cols-lg-2 g-4">
			  
			  <div className="col">
			    <div className="card shadow">
			      <img src={logo} className="card-img" alt="berlin-bg" />
			      <div className="card-img-overlay bg-black bg-opacity-50">
				      <div className="row justify-content-between">
				        <div className="col">
				        	<h1 className="card-title display-5 fw-bold lh-1">Berlin</h1>
				        	<h6 className="card-text text-uppercase fw-light lh-1">Germany</h6>
				        </div>
				        <div className="col text-end">
				        	icon
				        	<h4 className="card-text fw-light">Partly Cloudy</h4>
				        </div>
				      </div>
			        <div className="row align-items-end">
			          <div className="col">
				        	<div className="row row-cols-auto g-0 align-items-end">
				        		<div className="col">
				        			<h2 className="card-title fw-normal me-3">65&#176;</h2>
				        		</div>
				        		<div className="col">
				        			<h5 className="card-text fw-normal mb-1">8:43 a.m.</h5>
				        			<h5 className="card-text fw-light">Monday, November 16th</h5>
				        		</div>
				        	</div>
				        </div>
				        <div className="col">
					        <nav>
									  <div class="nav nav-tabs" id="nav-tab" role="tablist">
									    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" 
										    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" 
										    aria-selected="true">Today</button>
									    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" 
										    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" 
										    aria-selected="false">Week</button>
									  </div>
									</nav>
									<div class="tab-content" id="nav-tabContent">
									  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" 
									  	aria-labelledby="nav-home-tab">
									  	<ul class="list-group">
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    Now
											    <span>icon 65&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    9:00 a.m.
											    <span>icon 71&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    10:00 a.m.
											    <span>icon 73&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    11:00 a.m.
											    <span>icon 75&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    12:00 a.m.
											    <span>icon 84&#176;</span>
											  </li>
											</ul>
									  </div>
									  <div class="tab-pane fade" id="nav-profile" role="tabpanel" 
									  	aria-labelledby="nav-profile-tab">
									  	<ul class="list-group">
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    Now
											    <span>icon 65&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    9:00 a.m.
											    <span>icon 71&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    10:00 a.m.
											    <span>icon 73&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    11:00 a.m.
											    <span>icon 75&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    12:00 a.m.
											    <span>icon 84&#176;</span>
											  </li>
											</ul>
									  </div>
									</div>
								</div>
			        </div>
			      </div>
			    </div>
			  </div>

				<div className="col">
			    <div className="card shadow">
			      <img src={logo} className="card-img" alt="berlin-bg" />
			      <div className="card-img-overlay bg-black bg-opacity-50">
				      <div className="row justify-content-between">
				        <div className="col">
				        	<h1 className="card-title display-5 fw-bold lh-1">Berlin</h1>
				        	<h6 className="card-text text-uppercase fw-light lh-1">Germany</h6>
				        </div>
				        <div className="col text-end">
				        	icon
				        	<h4 className="card-text fw-light">Partly Cloudy</h4>
				        </div>
				      </div>
			        <div className="row align-items-end">
			          <div className="col">
				        	<div className="row row-cols-auto g-0 align-items-end">
				        		<div className="col">
				        			<h2 className="card-title fw-normal me-3">65&#176;</h2>
				        		</div>
				        		<div className="col">
				        			<h5 className="card-text fw-normal mb-1">8:43 a.m.</h5>
				        			<h5 className="card-text fw-light">Monday, November 16th</h5>
				        		</div>
				        	</div>
				        </div>
				        <div className="col">
					        <nav>
									  <div class="nav nav-tabs" id="nav-tab" role="tablist">
									    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" 
										    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" 
										    aria-selected="true">Today</button>
									    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" 
										    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" 
										    aria-selected="false">Week</button>
									  </div>
									</nav>
									<div class="tab-content" id="nav-tabContent">
									  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" 
									  	aria-labelledby="nav-home-tab">
									  	<ul class="list-group">
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    Now
											    <span>icon 65&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    9:00 a.m.
											    <span>icon 71&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    10:00 a.m.
											    <span>icon 73&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    11:00 a.m.
											    <span>icon 75&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    12:00 a.m.
											    <span>icon 84&#176;</span>
											  </li>
											</ul>
									  </div>
									  <div class="tab-pane fade" id="nav-profile" role="tabpanel" 
									  	aria-labelledby="nav-profile-tab">
									  	<ul class="list-group">
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    Now
											    <span>icon 65&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    9:00 a.m.
											    <span>icon 71&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    10:00 a.m.
											    <span>icon 73&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    11:00 a.m.
											    <span>icon 75&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    12:00 a.m.
											    <span>icon 84&#176;</span>
											  </li>
											</ul>
									  </div>
									</div>
								</div>
			        </div>
			      </div>
			    </div>
			  </div>
			
			  <div className="col">
			    <div className="card shadow">
			      <img src={logo} className="card-img" alt="berlin-bg" />
			      <div className="card-img-overlay bg-black bg-opacity-50">
				      <div className="row justify-content-between">
				        <div className="col">
				        	<h1 className="card-title display-5 fw-bold lh-1">Berlin</h1>
				        	<h6 className="card-text text-uppercase fw-light lh-1">Germany</h6>
				        </div>
				        <div className="col text-end">
				        	icon
				        	<h4 className="card-text fw-light">Partly Cloudy</h4>
				        </div>
				      </div>
			        <div className="row align-items-end">
			          <div className="col">
				        	<div className="row row-cols-auto g-0 align-items-end">
				        		<div className="col">
				        			<h2 className="card-title fw-normal me-3">65&#176;</h2>
				        		</div>
				        		<div className="col">
				        			<h5 className="card-text fw-normal mb-1">8:43 a.m.</h5>
				        			<h5 className="card-text fw-light">Monday, November 16th</h5>
				        		</div>
				        	</div>
				        </div>
				        <div className="col">
					        <nav>
									  <div class="nav nav-tabs" id="nav-tab" role="tablist">
									    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" 
										    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" 
										    aria-selected="true">Today</button>
									    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" 
										    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" 
										    aria-selected="false">Week</button>
									  </div>
									</nav>
									<div class="tab-content" id="nav-tabContent">
									  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" 
									  	aria-labelledby="nav-home-tab">
									  	<ul class="list-group">
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    Now
											    <span>icon 65&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    9:00 a.m.
											    <span>icon 71&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    10:00 a.m.
											    <span>icon 73&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    11:00 a.m.
											    <span>icon 75&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    12:00 a.m.
											    <span>icon 84&#176;</span>
											  </li>
											</ul>
									  </div>
									  <div class="tab-pane fade" id="nav-profile" role="tabpanel" 
									  	aria-labelledby="nav-profile-tab">
									  	<ul class="list-group">
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    Now
											    <span>icon 65&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    9:00 a.m.
											    <span>icon 71&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    10:00 a.m.
											    <span>icon 73&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    11:00 a.m.
											    <span>icon 75&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    12:00 a.m.
											    <span>icon 84&#176;</span>
											  </li>
											</ul>
									  </div>
									</div>
								</div>
			        </div>
			      </div>
			    </div>
			  </div>
			  
			  <div className="col">
			    <div className="card shadow">
			      <img src={logo} className="card-img" alt="berlin-bg" />
			      <div className="card-img-overlay bg-black bg-opacity-50">
				      <div className="row justify-content-between">
				        <div className="col">
				        	<h1 className="card-title display-5 fw-bold lh-1">Berlin</h1>
				        	<h6 className="card-text text-uppercase fw-light lh-1">Germany</h6>
				        </div>
				        <div className="col text-end">
				        	icon
				        	<h4 className="card-text fw-light">Partly Cloudy</h4>
				        </div>
				      </div>
			        <div className="row align-items-end">
			          <div className="col">
				        	<div className="row row-cols-auto g-0 align-items-end">
				        		<div className="col">
				        			<h2 className="card-title fw-normal me-3">65&#176;</h2>
				        		</div>
				        		<div className="col">
				        			<h5 className="card-text fw-normal mb-1">8:43 a.m.</h5>
				        			<h5 className="card-text fw-light">Monday, November 16th</h5>
				        		</div>
				        	</div>
				        </div>
				        <div className="col">
					        <nav>
									  <div class="nav nav-tabs" id="nav-tab" role="tablist">
									    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" 
										    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" 
										    aria-selected="true">Today</button>
									    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" 
										    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" 
										    aria-selected="false">Week</button>
									  </div>
									</nav>
									<div class="tab-content" id="nav-tabContent">
									  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" 
									  	aria-labelledby="nav-home-tab">
									  	<ul class="list-group">
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    Now
											    <span>icon 65&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    9:00 a.m.
											    <span>icon 71&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    10:00 a.m.
											    <span>icon 73&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    11:00 a.m.
											    <span>icon 75&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center fw-light">
											    12:00 a.m.
											    <span>icon 84&#176;</span>
											  </li>
											</ul>
									  </div>
									  <div class="tab-pane fade" id="nav-profile" role="tabpanel" 
									  	aria-labelledby="nav-profile-tab">
									  	<ul class="list-group">
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    Now
											    <span>icon 65&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    9:00 a.m.
											    <span>icon 71&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    10:00 a.m.
											    <span>icon 73&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    11:00 a.m.
											    <span>icon 75&#176;</span>
											  </li>
											  <li class="list-group-item d-flex justify-content-between align-items-center">
											    12:00 a.m.
											    <span>icon 84&#176;</span>
											  </li>
											</ul>
									  </div>
									</div>
								</div>
			        </div>
			      </div>
			    </div>
			  </div>	
			
			  <div className="col">5</div>
			  <div className="col">6</div>	
			</div>
    </div>
  );
}

export default App;
