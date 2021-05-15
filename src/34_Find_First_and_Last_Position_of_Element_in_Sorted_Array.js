function matchTarget(nums, idx, target, isLeft) {
  if (nums[idx] !== target) return false;
  if (isLeft) {
    if (idx === 0 || nums[idx - 1] < nums[idx]) return true;
    else return false;
  } else {
    if (idx === nums.length - 1 || nums[idx + 1] > nums[idx]) return true;
    else return false;
  }
}

function findIndexOneSide(nums, target, isLeft) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (matchTarget(nums, mid, target, isLeft)) {
      return mid;
    } else if (nums[mid] === target) {
      if (isLeft) right = mid - 1;
      else left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export default function searchRange(nums, target) {
  const lidx = findIndexOneSide(nums, target, true);
  const ridx = findIndexOneSide(nums, target, false);
  return [lidx, ridx];
}
