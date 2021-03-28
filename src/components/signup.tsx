import { useRef, useState } from "react"

import { useHistory } from "react-router-dom"

export const Signup: React.FC = () => {
	const email = useRef<HTMLInputElement>(null)
	const password = useRef<HTMLInputElement>(null)
	const confirmPassword = useRef<HTMLInputElement>(null)

	const [err, setErr] = useState<string>("")

	//usehistory
	const { push } = useHistory()

	//form submit handler
	const onFormSubmitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()

		const userEmail = email?.current?.value
		const userPassword = password?.current?.value
		const userPasswordConfirm = confirmPassword?.current?.value

		if (userEmail === "" || userPassword === "" || userPasswordConfirm === "") {
			setErr("All Fields Required!")
		} else if (userPassword !== userPasswordConfirm) {
			setErr("Passwords didn't matched!")
		} else {
			setErr("")
			const userData = {
				userEmail,
				userPassword,
			}

			console.log({ userData })
		}
	}

	return (
		<div className='login'>
			<form onSubmit={onFormSubmitHandler}>
				<h2>Sign Up</h2>
				<input type='text' ref={email} placeholder='email' />
				<input type='password' ref={password} placeholder='password' />
				<input type='password' ref={confirmPassword} placeholder='password' />
				<p className='err-text'>{err}</p>
				<button type='submit'>Sign Up</button>
				<p>
					already have an account?{" "}
					<span>
						<h6 onClick={() => push("/login")}>Login</h6>
					</span>
				</p>
			</form>
		</div>
	)
}
