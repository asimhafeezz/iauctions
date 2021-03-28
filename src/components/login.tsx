import { useRef, useState } from "react"

import { useHistory } from "react-router-dom"

export const Login: React.FC = () => {
	const email = useRef<HTMLInputElement>(null)
	const password = useRef<HTMLInputElement>(null)

	const [err, setErr] = useState<string>("")

	//usehistory
	const { push } = useHistory()

	//form submit handler
	const onFormSubmitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()

		const userEmail = email?.current?.value
		const userPassword = password?.current?.value

		if (userEmail === "" && userPassword === "") {
			setErr("All Fields Required!")
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
				<h2>Login</h2>
				<input type='text' ref={email} placeholder='email' />
				<input type='password' ref={password} placeholder='password' />
				<p className='err-text'>{err}</p>
				<button type='submit'>Login</button>
				<p>
					don't have an account?{" "}
					<span>
						<h6 onClick={() => push("/signup")}>Sign Up</h6>
					</span>
				</p>
			</form>
		</div>
	)
}
