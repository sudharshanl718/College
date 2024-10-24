import React from 'react'

const Apply = () => {
  return (
    <div>
      <div class="dropdown ">
        <h3 className='pe-2'>Choose your course </h3>
        <a class="btn btn-secondary dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Select Course
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#diploma">Diploma Programs</a></li>
          <li><a class="dropdown-item" href="#btech">Undergraduate Programs (B.Tech)</a></li>
          <li><a class="dropdown-item" href="#mtech">Postgraduate Programs (M.Tech)</a></li>
        </ul>
      </div>

      <form class="row g-3 needs-validation" validate id='diploma' action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="a460faf1-fc96-41fb-be66-64d2dd72229f"></input>
        <fieldset class="apply">
          <legend><h1 className='pb-2'>Diploma Programs</h1></legend>
          <div class="col-md-8">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" required name="First name" />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-8">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" required name="Last name" />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-8">
            <label for="validationCustomUsername" class="form-label">Email address</label>
            <div class="input-group has-validation">
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required name="Email" />
              <div class="invalid-feedback">
                Please choose a email address.
              </div>
            </div>
          </div>
          <fieldset>
            <legend>Select your program</legend>
            <div class="form-check">
              <input class="form-check-input" type="checkbox"value={"Diploma in Civil Engineering"} id="flexCheckChecked"  name="Program" />
              <label class="form-check-label" for="flexCheckChecked">
                Diploma in Civil Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Diploma in Mechanical Engineering" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                Diploma in Mechanical Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Diploma in Electrical Engineering" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                Diploma in Electrical Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Diploma in Computer Science Engineering" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                Diploma in Computer Science Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="Diploma in Electronics and Communication Engineering" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                Diploma in Electronics and Communication Engineering
              </label>
            </div>
          </fieldset>
          <div class="col-12 pt-3">
            <button class="btn btn-primary" type="submit">Apply</button>
          </div>
        </fieldset>
      </form>

      <form class="row g-3 needs-validation" validate id='btech' action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="a460faf1-fc96-41fb-be66-64d2dd72229f"></input>
        <fieldset class="apply">
          <legend><h1 className='pb-2'>Undergraduate Programs (B.Tech)</h1></legend>
          <div class="col-md-8">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" required name="First name" />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-8">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" required name="Last name" />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-8">
            <label for="validationCustomUsername" class="form-label">Email address</label>
            <div class="input-group has-validation">
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required name="Email" />
              <div class="invalid-feedback">
                Please choose a email address.
              </div>
            </div>
          </div>
          <fieldset>
            <legend>Select your program</legend>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="B.tech in Civil Engineering" id="flexCheckChecked" name="Program" />
              <label class="form-check-label" for="flexCheckChecked">
                B.tech in Civil Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="B.tech in Mechanical Engineering" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                B.tech in Mechanical Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="B.tech in Electrical Engineering" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                B.tech in Electrical Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="B.tech in Computer Science Engineering" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                B.tech in Computer Science Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="B.tech in Electronics and Communication Engineering" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                B.tech in Electronics and Communication Engineering
              </label>
            </div>
          </fieldset>
          <div class="col-12 pt-3">
            <button class="btn btn-primary" type="submit">Apply</button>
          </div>
        </fieldset>
      </form>

      <form class="row g-3 needs-validation" validate id='mtech' action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="a460faf1-fc96-41fb-be66-64d2dd72229f"></input>
        <fieldset class="apply">
          <legend><h1 className='pb-2'>Postgraduate Programs (M.Tech)</h1></legend>
          <div class="col-md-8">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" required name="First name" />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-8">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" required name="Last name" />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>
          <div class="col-md-8">
            <label for="validationCustomUsername" class="form-label">Email address</label>
            <div class="input-group has-validation">
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required name="Email" />
              <div class="invalid-feedback">
                Please choose a email address.
              </div>
            </div>
          </div>
          <fieldset>
            <legend>Select your program</legend>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="M.Tech in Structural Engineering" id="flexCheckChecked" name="Program" />
              <label class="form-check-label" for="flexCheckChecked">
                M.Tech in Structural Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="M.Tech in Computer Science and Engineering" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                M.Tech in Computer Science and Engineering
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="M.Tech in Power Systems" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                M.Tech in Power Systems
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="M.Tech in VLSI Design" id="flexCheckDefault" name="Program" />
              <label class="form-check-label" for="flexCheckDefault">
                M.Tech in VLSI Design
              </label>
            </div>
          </fieldset>
          <div class="col-12 pt-3">
            <button class="btn btn-primary" type="submit">Apply</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default Apply