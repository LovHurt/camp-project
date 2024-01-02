import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced = "right" src="https://media.licdn.com/dms/image/D4D03AQFeWz6VYqs-rg/profile-displayphoto-shrink_800_800/0/1680711685837?e=2147483647&v=beta&t=lSo9Tj6ZbYBRVhgByUj_xunyJFSObTmuDGCTF-1jGr4" />
             <Dropdown pointing = "top left" text = "Alican">
                <Dropdown.Menu>
                    <Dropdown.Item text = "My info" icon ="info"/>
                    <Dropdown.Item onClick={signOut} text = "Sign Out" icon ="sign-out"/>

                </Dropdown.Menu>
             </Dropdown>
        </Menu.Item>

    </div>
  )
}
