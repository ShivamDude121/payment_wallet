
import Element from "./stack_ements"

export default function Stack(){
    return (
        <>

<ul role="list" class="divide-y divide-gray-100">
  <li class="flex justify-between gap-x-6 py-5">
    <Element/>
</li>
  <li class="flex justify-between gap-x-6 py-5">
  <Element/>
 </li>
  <li class="flex justify-between gap-x-6 py-5">
  <Element/>
    
  </li>
  <li class="flex justify-between gap-x-6 py-5">
  <Element/>
    
  </li>
  <li class="flex justify-between gap-x-6 py-5">
  <Element/>
  </li>
  </ul>

        </>
    )
}