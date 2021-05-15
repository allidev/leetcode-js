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

function binarySearch(nums, left, right, target) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
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

export function searchRangeAlt(nums, target) {
  const firstPos = binarySearch(nums, 0, nums.length - 1, target);
  if (firstPos === -1) return [-1, -1];
  let startPos = firstPos,
    endPos = firstPos,
    temp1,
    temp2;
  while (startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target);
  }
  startPos = temp1;
  while (endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
  }
  endPos = temp2;
  return [startPos, endPos];
}
