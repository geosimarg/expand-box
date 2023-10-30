let sideBoxOp = false;
const content1 = `<div class="bt1700"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="bt1701" data-editor-id="emptyBetSlipIcon">
        <g clip-path="url(#clip0_19728_23370)">
          <path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#F12C4C"></path>
          <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M39.1395 42.6234C35.0096 45.9848 29.7401 48 24 48C18.3243 48 13.1088 46.0298 9 42.7361V14H12C12 15.6569 13.3431 17 15 17C16.6569 17 18 15.6569 18 14H21C21 15.6569 22.3431 17 24 17C25.6569 17 27 15.6569 27 14H30C30 15.6569 31.3431 17 33 17C34.6569 17 36 15.6569 36 14H39.1395V42.6234ZM16.5 24C15.6716 24 15 24.6716 15 25.5C15 26.3284 15.6716 27 16.5 27H31.5C32.3284 27 33 26.3284 33 25.5C33 24.6716 32.3284 24 31.5 24H16.5ZM16.5 31C15.6716 31 15 31.6716 15 32.5C15 33.3284 15.6716 34 16.5 34H27.5C28.3284 34 29 33.3284 29 32.5C29 31.6716 28.3284 31 27.5 31H16.5Z" fill="#F12C4C"></path>
        </g>
        <defs>
          <clipPath id="clip0_19728_23370">
            <rect width="48" height="48" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      <div class="bt1702">
        <div class="bt1703">Content x title</div>
        <div class="bt1704" style="opacity: 0.7;">As tuas seleções vão aparecer aqui<br>
        <a href="javascript:MoreContent()">More content</a>
        </div>
      </div>
    </div>`;

function SideBoxToggle() {
  console.log({ sideBoxOp });
  if (!sideBoxOp) {
    sideBoxOp = true;
    MoreContent();
  } else {
    sideBoxOp = false;
    $("#side-box-body").css({ height: "0px" });
  }
}

function MoreContent() {
  $("#side-box-body-content").html(
    $("#side-box-body-content").html() + content1
  );
  const height = $("#side-box-body-content").innerHeight();
  $("#side-box-body").css({ height: `${height}px` });
}
