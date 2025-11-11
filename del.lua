<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Linked List Example - Complete</title>
</head>
<body>

<script>
  function node(value) {
    return{
      data:value,
      next:null,
      prev:null
    }
  }
let head=node(1)
let second=node(2)
let third=node(3)

head.next=second
second.prev=head

second.next=third
third.prev=second
  function print(head) {
  let current=head
  while (current !==null) {
    console.log(current.data)
    current=current.next
  }
  let tail=head
    while (tail.next) 
      tail=tail.next
    while (tail) {
      console.log(tail.data)
        tail=tail.prev
      }
  }

  function search(head,value) {

    let current=head
    while (current !==null) {
        if(current.data===value){
            console.log(value,"yes")
        return true
        }
            current=current.next

    }
            console.log(value,"no")
            return false
  }

  function deleted(head,value) {
if(head===null) return head
if(head.data===value){
  console.log("delete data",head.data)
  return head.next
}
let current=head
    while (current.next !==null && current.next.data !==value) {
      current=current.next
    }
      if (current.next !== null) {
      console.log("Deleted:", current.next.data);
      current.next = current.next.next;
    } else {
      console.log("Value not found to delete:", value);
    }

    return head;
  }
  deleted(head,2)
  search(head,23)
  print(head)
</script>

</body>
</html>
